let name: string[] = ["minh","hung","duong","hoang", "viet"]

function showName(namee: string): void {
    console.log("name", namee);
}

for (let n of name) {
    showName(n);
}