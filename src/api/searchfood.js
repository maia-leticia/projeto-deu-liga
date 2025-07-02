export async function searchFood(search){
    const suggestion = await fetch (`https://platform.fatsecret.com/rest/foods/search/v1?search_expression=${encodeURIComponent(search)}&format=json&page_number=0&max_results=5`)
      headers: {
        "Authorization": `Bearer SEU_TOKEN_AQUI`
     }
    if(!suggestion.ok) throw new Error("Erro ao buscar o alimento") 
    const data = await response.json();
    const suggestions = data.suggestions?.suggestion || [];
    return suggestions.map(item => item.food_name);
}