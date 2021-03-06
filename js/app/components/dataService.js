function loadCustomers() {
    return [
    { Id: 1, FIO: 'Douglas Crockford', Rating: '2008' },
    { Id: 2, FIO: 'Alex MacCaw', Rating: '2' },
    { Id: 3, FIO: 'Cay S. Horstmann', Rating: '1632' },
    { Id: 4, FIO: 'Bret Easton Ellis', Rating: '568' },
    { Id: 5, FIO: 'Marijn Haverbeke', Rating: '150' }
    ];
}

var DataService = {
    getData: function () {
        var lc = loadCustomers();
        var customers = new Customers(lc);
        return customers;
    }
};
