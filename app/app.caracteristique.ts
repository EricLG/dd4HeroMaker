import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'caracteristique',
  template:`<div class="row">
        
		<div class="col-3">
		    <div class="dd4-black-array">
                    <div class="col-6">
                        <div class="centered">
                            <div class="white-text">{{bigTitle}}</div>
                            <div class="white-label">{{title}}</div>
                        </div>
                    </div>
                    <input class="main-input-square-2" maxlength="3">
                    <input type="button" class="main-input-circle black-button" value="-" (click)="clickDec()"/>
			</div>
		</div>
		<div class="col-1">
            <div class="col-4 dd4-white-array">
                <input type="button" class="main-input-circle white-button" value="+" (click)="clickInc()"/>
            </div>
        </div>
        <div class="col-1 ">
            <div class="col-4">
               <div class="dd4-black-array">
                       <div class="col-6 centered">
                            <div class="white-text">&nbsp;</div>
                            <div class="white-label">&nbsp;</div>
                        </div>
                        <div class="col-6">
                            <input class="main-input-square-3" maxlength="3" value="{{character[bigTitle]}}">
                        </div>
                </div>
            </div>
        </div>
        
        <div class="col-1">
             <div class="dd4-white-array">
             =
             </div>
        </div>
        <div class="col-2">
            <div class="col-4 dd4-white-array">
                <input class="main-input-square-3" maxlength="3">
            </div>
        </div>
        <div class="col-1">
          <div class="col-4">
           <div class="dd4-black-array">
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
        <div class="col-1">
          <div class="col-4">
           <div class="dd4-black-array">
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
    @Input() character;
    
    canInc():Boolean {
        if (this.character.stockPoints > 0) {
            return true;
        }
        return false;
    }
    canDec():Boolean {
        if (this.caract() > 0) {
            return true;
        }
        return false;
    }
    inc() {
        this.character[this.bigTitle]++;
    }
    dec() {
        this.character[this.bigTitle]++;
    }
    clickInc() {
        if (this.canInc()) {
            this.inc();
            this.character.stockPoints--;
        }
    }
    clickDec() {
        if (this.canDec()) {
            this.dec();
            this.character.stockPoints++;
        }
    }
    constructor() {
        console.log('constructor '+this.title);
    }
}
