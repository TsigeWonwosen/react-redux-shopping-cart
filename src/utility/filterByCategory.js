function filterByCategory(items, selectedCategory) {
  if (!selectedCategory) return items;

  return items.filter((item) => {
    // Split the category string into words
    const categoryWords = item.category.toLowerCase().split(/\s+/);
    // Check if any word exactly matches our selected category
    return categoryWords.includes(selectedCategory.toLowerCase());
  });
}

export default filterByCategory;
