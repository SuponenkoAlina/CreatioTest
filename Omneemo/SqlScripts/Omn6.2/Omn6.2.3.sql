SELECT Contact.Name AS 'ФИО контакта', Account.Name AS 'Компания', JobTitle AS 'Должность'
FROM Contact
JOIN Account
  ON Contact.AccountId = Account.Id
JOIN Opportunity
  ON Account.Id = Opportunity.AccountId
WHERE StageId != '60D5310C-5BE6-DF11-971B-001D60E938C6' and 
    StageId != 'A9AAFDFE-2242-4F42-8CD5-2AE3B9556D79' and 
    StageId != '9ABF243C-FC00-45CF-8E28-CDB66C9208B0'