# price-history
An app for tracking price history of products over time

## Harris Teeter
1. First need to pull all relevant data and have some sort of import UI
1. Should be able to use HT's online site and automate pulling the data from API calls
   1. POST https://www.harristeeter.com/atlas/v1/purchase-history/v2/details
   1. Body example
      ```
        [{
            "divisionNumber":"097",
            "storeNumber":"00253",
            "transactionDate":"2025-02-14",
            "terminalNumber":"503",
            "transactionId":"220844"
        }]
      ```
   1. Might need to send cookies along with this... maybe `JSESSIONID`
   1. This information can be scraped from GET https://www.harristeeter.com/mypurchases/api/v1/receipt/summary/by-user-id in the `receiptId` field of the object[] response
   1. Might be able to make an extension to monitor for the network calls instead using https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests... not sure I can use a back-end to make the request on behalf of the user... don't see a Kroger API that gets receipts