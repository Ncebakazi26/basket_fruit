module.exports = function fruit_basket(pool){
    async function addFruit(fruit,qty,prc){
        var data = await pool.query(` insert into fruit_basket ( fruit_name ,quantity,price) values($1,$2,$3)`,[fruit,qty,prc])
        return fruit + ' is successfully inserted';
        
    }
    async function show (){
        var data = await pool.query(`select * from fruit_basket where fruit_name = 'Orange' `)
       return data.rows
    }
   async function update(fruit){
    var data = await pool.query(`update fruit_basket set quantity = 10 where fruit_name = $1`,[fruit])
   return 'updated successfully'

   }
   async function sum(){
       var data = await pool.query(`select sum(quantity) from fruit_basket where fruit_name = 'Orange'`)
return data.rows

   }
async function total(){
var data = await pool.query(`select sum(price*quantity) from fruit_basket where fruit_name = 'Apple' `)
return data.rows
}
return{
addFruit,
show,
update,
sum,
total
}
}