const API =
"https://opensheet.elk.sh/1nLoK--B1WDvurEKqfjm3On-aagzkqZu_HrN9fiKWhto/bouquets"

export async function getFlowers(){

const res = await fetch(API)
const data = await res.json()

return data.filter(item => item.name && item.name.trim() !== "")

}