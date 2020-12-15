trigger OpportunityTrigger on Opportunity (after update) {
    OpportunityTriggerHelper.createNewCase(trigger.new);

}