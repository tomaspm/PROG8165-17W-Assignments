function returnTransactionsByCategory(categoryName)
{
	var Transaction1 = {
		Date: '2017-02-14',
		Description 'First transaction of type ' + categoryName,
		value = 100
	};
	var Transaction2 = {
		Date: '2017-02-15',
		Description 'Second transaction of type ' + categoryName,
		value = 200
	};
	var Transaction3 = {
		Date: '2017-02-16',
		Description 'Third transaction of type ' + categoryName,
		value = 300
	};
	return [Transaction1, Transaction2, Transaction3];
	return {
		transaction1: Transaction1,
		transaction2: Transaction2, 
		transaction3: Transaction3
	};
};