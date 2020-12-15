public class OpportunityTriggerHelper {
    public static void createNewCase(List<Opportunity> oppList){
        List<Case> caseList = New List<Case>();
        for(Opportunity opp : oppList){
            if(opp.StageName == 'Closed Won'){
                case caseRec = new case();
                caseRec.AccountId = opp.AccountId;
                caseRec.Subject = opp.Name;
                caseRec.Status = 'New';
                caseList.add(caseRec);
            }
            
        }
        if(caseList.size() > 0){
            Insert caseList;
        }
        
    }

}