UPDATE Opportunity SET CategoryId = (SELECT Id FROM OpportunityCategory WHERE Name = 'Small business') 
WHERE Amount < 1000