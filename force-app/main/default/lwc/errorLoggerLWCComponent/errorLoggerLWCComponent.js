import { LightningElement } from "lwc";
//import getErrorDetailsFromLWCComponent from "@salesforce/apex/Error_Logger.CatchAndPublishExceptionEvent.getErrorDetailsFromLWCComponent";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import USER_ID from "@salesforce/user/Id";

export default class ErrorLoggerLWCComponent extends LightningElement {
  handleLWCError() {
    try {
      new Error("Error message from LWC component.");
    } catch (error) {
      this.showErrorToastMessage("Error", error.message, "pester", "error");
      var userId = USER_ID;
      //invokes the apex method
      getErrorDetailsFromLWCComponent({
        inputParams: null,
        cmpName: "errorLoggerLWCComponent",
        cmpType: "LWC",
        funcName: "Opportunity",
        userId: userId,
        errorMsg: JSON.stringify(error.stack),
        briefDesc: JSON.stringify(error.message)
      })
        .then((response) => {
          // process the returned result the apex method
          console.log("Success");
        })
        .catch((error) => {
          console.log("error" + error);
        });
    }
  }

  showErrorToastMessage(errorTitle, errorMesssage, errorMode, errorType) {
    const toastEvent = new ShowToastEvent({
      title: errorTitle,
      message: errorMesssage,
      variant: errorType,
      mode: errorMode
    });
    this.dispatchEvent(toastEvent);
  }
}
