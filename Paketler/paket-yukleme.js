const slugify = require('slugify');

const text = "besiktas galatasaray fenerbahce trabzon";
const slug = slugify(text,'*');
console.log(slug);