import koa from 'koa';

let app =koa();
app.use(function *() {
    this.body='Hello jacks';
});

app.listen(3004,()=>{
    console.log(new Date());
    console.log('listening 3004');
});