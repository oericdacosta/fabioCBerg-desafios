function filteredItems(arr, searchItem){
    return arr.filter(function(user){
        return (user.fisrtName.toLowerCase().includes(searchItem.toLowerCase()) || user.lastName.toLowerCase().includes(searchItem.toLowerCase()));
    })
}

const users = [
    {fisrtName: "Fabio", lastName: "Bergmann"},
    {fisrtName: "John", lastName: "Robert"},
    {fisrtName: "John", lastName: "Doe"},
    {fisrtName: "Albert", lastName: "Carter"},
]

console.log(filteredItems(users, "fa"));
console.log(filteredItems(users, "be"));