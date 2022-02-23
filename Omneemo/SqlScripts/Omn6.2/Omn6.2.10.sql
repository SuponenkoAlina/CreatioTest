DELETE FROM Opportunity FROM Opportunity
JOIN OpportunityProductInterest ON OpportunityProductInterest.OpportunityId = Opportunity.Id
JOIN Account ON Account.Id = Opportunity.AccountId
WHERE ContactId != '410006E1-CA4E-4502-A9EC-E54D922D2C00'
AND 
Account.CreatedOn < '2019-01-01'
AND
OpportunityProductInterest.OpportunityId = NULL