// import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
    entry: 'aot/app/main.aot.js',
    dest: 'dist/build.js', // output a single application bundle
    format: 'iife',
    onwarn: function (message) {
        if (message.code != 'THIS_IS_UNDEFINED' && message.code != 'MISSING_EXPORT') {
            console.error(message);
        }
    },
    sourceMap: true,
    plugins: [
        nodeResolve({
            jsnext: true,
            module: true
        }),
        commonjs({
            include: [
                'node_modules/rxjs/**'
            ]
        }),
        uglify()
    ]
}
