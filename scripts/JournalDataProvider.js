const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
{
    id: 1,
    date: "07/25/2025",
    concept: "JavaScript",
    entry: "We talked about JavaScript components and how to make Functions.",
    mood: "Ok"
},

{
    id: 1,
    date: "07/26/2025",
    concept: "JvavaScripts",
    entry: "We talked about how to import and export JavaScript functions.",
    mood: "Ok"
},


]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}