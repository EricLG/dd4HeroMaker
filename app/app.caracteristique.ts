import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'caracteristique',
  template:`<div class="row">
        <div class="col-1">
           &nbsp;
        </div>
		<div class="col-4">
		    <div class="black-array">
                    <div class="col-2"><input class="main-input-square-2" maxlength="3"></div>
                    <div class="col-2">&nbsp;</div>
                    <div class="col-6">
                       
                        <div class="centered">
                            <div class="white-text">{{bigTitle}}</div>
                            <div class="white-label">{{title}}</div>
                        </div>
                    </div>
			</div>
		</div>
		<div class="col-1">
           &nbsp;
        </div>
        <div class="col-3">
          <div class="col-4">
           <div class="black-array">
                   <div class="col-6 centered">
                        <div class="white-text">&nbsp;</div>
                        <div class="white-label">&nbsp;</div>
                    </div>
                    <div class="col-6">
                        <input class="main-input-square-3" maxlength="3">
                    </div>
			</div>
            </div>
        </div>
        
        <div class="col-3">
          <div class="col-4">
           <div class="black-array">
                   <div class="col-6 centered">
                        <div class="white-text">&nbsp;</div>
                        <div class="white-label">&nbsp;</div>
                    </div>
                    <div class="col-6">
                        <input class="main-input-square-3" maxlength="3">
                    </div>
			</div>
            </div>
        </div>
	</div>`
  })
export class Caracteristique { 
    @Input() title = 't';
    @Input() bigTitle = 't';
    
    constructor() {
        console.log('constructor '+this.title);
    }
    
}
