// TODOJEF: This is still timing out at 10s, so I upped it to 60... should try tomorrow
async function sleep(ms = 60000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getReceipts(data) {
  const receipts = [];
  const purchases = [];
  console.log("getReceipts")
  for (const { receiptId } of data) {
    const { storeNumber, divisionNumber, transactionDate, terminalNumber, transactionId } = receiptId;
    receipts.push({ storeNumber, divisionNumber, transactionDate, terminalNumber, transactionId });
  }
  for (let i = 0; i < receipts.length; i += 20) {
    try {
      const response = await fetch("https://www.harristeeter.com/atlas/v1/purchase-history/v2/details", {
        method: "POST",
        /* You can send in multiple receipt objects, but I think the limit is 20... if I had it any higher, I'd get a 500
         * response from the server without a proper error message */
        body: JSON.stringify(receipts.slice(i, i + 20)),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const result = await response.json();
      purchases.push(result.data.purchaseHistoryDetails);
      await sleep();
    }
    catch (ex) {
      console.error(ex)
    }
  }
  console.log(purchases);
}

function logURL(requestDetails) {
  const data = [];
  const decoder = new TextDecoder("utf-8");
  const filter = browser.webRequest.filterResponseData(requestDetails.requestId)

  filter.onstart = (event) => {
    console.log('starting')
  }

  // Taken from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata
  filter.ondata = (event) => {
    console.log('ondata', event.data)
    data.push(decoder.decode(event.data, { stream: true }));
    // filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log(data.length);
    if (data.length) {
      getReceipts(JSON.parse(data.join("")));
    }
    filter.close();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["*://www.harristeeter.com/mypurchases/api/v1/receipt/summary/by-user-id"]
}, ["blocking"]);
