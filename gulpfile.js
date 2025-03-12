import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css (done) {
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError) )//el on esta a la escucha de errores
        .pipe( dest('build/css') )

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)//cuando llamamos a la funcion dev esta atento a la ruta que le he pasado y cuando haya cambios ejecuta la funcion de css
}