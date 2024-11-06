function DNAtoRNA(dna) {
    return dna.replace(/T/gi, "U").toUpperCase();
}
