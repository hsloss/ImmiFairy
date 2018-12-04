var macro;
macro =  "CODE:";
macro +=  "VERSION BUILD=8070701 RECORDER=CR" + "\n"; 
macro +=  "SET !DATASOURCE sample_rns.csv" + "\n"; 
macro +=  "SET !DATASOURCE_COLUMNS 1" + "\n"; 
macro +=  "SET !LOOP 1" + "\n"; 
macro +=  "SET !DATASOURCE_LINE {{i}}" + "\n"; 
macro +=  "URL GOTO=https://egov.uscis.gov/casestatus/landing.do" + "\n";
macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:landingForm ATTR=ID:receipt_number CONTENT={{!COL1}}" + "\n"; 
macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:landingForm ATTR=NAME:initCaseSearch" + "\n"; 
macro +=  "TAG POS=1 TYPE=H1 ATTR=TXT:* EXTRACT=TXT" + "\n"; 
macro +=  "TAG POS=1 TYPE=P ATTR=TXT:* EXTRACT=TXT" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=* FILE=EXTRACT_081315rns.csv" + "\n"; 


for(i=1;i<850;i++){
    iimSet("i",i);
    iimPlay(macro)
}