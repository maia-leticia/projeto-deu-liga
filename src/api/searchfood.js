export async function searchFood(query){
    try{
      const response = await fetch(`http://localhost:3001/autocomplete?query=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error("Erro na busca")
        return await response.json()
    } catch (error) {
      console.error(error)
      throw error
    }
}