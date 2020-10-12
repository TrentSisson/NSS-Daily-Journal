import { useJournalEntries } from "./JournalDataProvider.js"

import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {

    const entryLog = document.querySelector(".entrylog")

    const entries = useJournalEntries()
    

    let JournalEntrylistHtmlRepresentations =""
     for (const ENTRY of entries) {
         JournalEntrylistHtmlRepresentations += JournalEntryComponent(ENTRY)
        
        
        

       

    }
    entryLog.innerHTML += `
    <section class="singleEntry">
    <div class="eachEntry">
    ${JournalEntrylistHtmlRepresentations}
    </div>
    </section>
    `



}
