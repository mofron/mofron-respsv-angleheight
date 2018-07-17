/**
 * @file mofron-respsv-angleheight/index.js
 * @author simpart
 */

/**
 * @class AngleHeight
 * @brief angle height responsive config class
 */
mofron.respsv.AngleHeight = class extends mofron.Respsv {
    
    constructor (po, hrz, vrt) {
        try {
            super();
            this.name('AngleHeight');
            this.prmOpt(po, hrz, vrt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            mofron.func.vrtAngleEvent(
                (evt, hei) => {
                    hei.component().height(hei.value()[1]);
                },
                this
            );
            
            mofron.func.hrzAngleEvent(
                (evt, hei) => {
                    hei.component().height(hei.value()[0]);
                },
                this
            );
            
            
            this.component().height(
                (window.innerHeight < window.innerWidth) ? this.value()[0] : this.value()[1]
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.respsv.AngleHeight;
