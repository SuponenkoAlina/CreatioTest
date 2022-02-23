INSERT INTO Document (Date, OwnerId, Number)
VALUES (DATEADD(D,1,GETDATE()), (SELECT Id FROM Contact WHERE Name = 'Supervisor'), 12345)