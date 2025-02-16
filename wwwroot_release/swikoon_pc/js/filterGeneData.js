// Secure data filtering module for transcription factor data
class GeneDataFilter {
  constructor(allGeneData) {
    // Store the complete dataset privately
    this._data = allGeneData;
  }

  // Filter data by family name (e.g., "AP2")
  filterByFamily(familyName) {
    if (!familyName || typeof familyName !== "string") {
      console.error("Invalid family name provided");
      return [];
    }

    // Return only records matching the family name
    return this._data.filter(
      (record) =>
        record.tfType &&
        record.tfType.toLowerCase() === familyName.toLowerCase()
    );
  }

  // Filter data by gene ID or related fields
  filterByGeneId(searchTerm) {
    if (!searchTerm || typeof searchTerm !== "string") {
      console.error("Invalid search term provided");
      return [];
    }

    const term = searchTerm.toLowerCase();

    // Return only records matching the search term in relevant fields
    return this._data.filter((record) => {
      const geneId = (record.geneId || "").toLowerCase();
      const atgi = (record.atgi || "").toLowerCase();
      const atName = (record.atName || "").toLowerCase();

      return (
        geneId.includes(term) || atgi.includes(term) || atName.includes(term)
      );
    });
  }

  // Get initial AP2 data only
  getInitialData() {
    return this.filterByFamily("AP2");
  }
}

// Export the filter class
window.GeneDataFilter = GeneDataFilter;
