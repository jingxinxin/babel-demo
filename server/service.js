import koa from 'koa';
import open from 'open';
import routes from '../isomorphism/routes';
import index from '../isomorphism/index';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

let app = new koa();

app.use(async(ctx, next)=> {
    await next();
    if (ctx.state.renderProps) {
        let html = ()=> {
            return renderToString(
                <RouterContext {...ctx.state.renderProps} />
            );
        };
        ctx.body = index(html);
    }
});

app.use(async(ctx, next) => {
    await match({
            routes: routes,
            location: ctx.url
        },
        (error, redirectLocation, renderProps) => {
            if (error) {
                this.throw(error.message, 500);
            }
            else if (redirectLocation) {
                this.redirect(redirectLocation.pathname + redirectLocation.search);
            }
            else if (renderProps) {
                ctx.state.renderProps = renderProps;
            } else {
                // this.throw('Not Found', 404);
            }
        })
});


app.listen(3004, ()=> {
    console.log(new Date());
    console.log('listening 3004');
});
open('http://localhost:3004');