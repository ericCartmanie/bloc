// Construct the Event Handler
const log_out = (node)=>{
    var text = node.innerText;
    alert(text);
}
// Obtain the list of items
var list_nodes = document.querySelectorAll('button');
// Assign event listener to each node
for(let i = 0;i<list_nodes.length;i++){
    list_nodes[i].addEventListener('click',()=>{log_out(list_nodes[i])});
}