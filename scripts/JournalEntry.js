export const JournalEntryComponent = (entry) => {
    return `
        <h3> ENTRY </h3>
        <section id="entry--${entry.id}" class="journalEntry">
        <div>DATE- ${entry.date}</div>
        <div>CONCEPT- ${entry.concept}</div>
        <div>JOURNAL ENTRY- ${entry.entry}</div>
        <div>MOOD- ${entry.mood}</div>
        <div class="buttons">
            <input class="EDIT" type="button" value="EDIT">
            <input class="DELETE" type="button" value="DELETE">
        </div>
        </section>
    `
}