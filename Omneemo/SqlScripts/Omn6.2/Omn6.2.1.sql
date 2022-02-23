SELECT * FROM Account
WHERE TypeId = (SELECT Id FROM AccountType WHERE Name = 'Customer')