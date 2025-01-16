function stairsIn20(s) {
    return s.reduce((steps, day) => steps.concat(day)).reduce((sum, count) => sum + count) * 20;
}
