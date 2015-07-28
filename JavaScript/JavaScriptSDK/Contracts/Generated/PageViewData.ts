// THIS TYPE WAS AUTOGENERATED
/// <reference path="EventData.ts" />
module AI
{
"use strict";
    export class PageViewData extends AI.EventData
    {
        public ver: number;
        public url: string;
        public name: string;
        public duration: string;
        public referrer: string;
        public referrerData: string;
        public properties: any;
        public measurements: any;
        
        constructor()
        {
            this.ver = 2;
            this.properties = {};
            this.measurements = {};
            
            super();
        }
    }
}
