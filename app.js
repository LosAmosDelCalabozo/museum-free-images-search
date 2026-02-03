const noIframeHosts = [
    'harvardartmuseums.org',
    'si.edu',
    'nasjonalmuseet.no',
    'cyfrowe.mnw.art.pl',
    'artgallery.yale.edu',
    'sammlung.staedelmuseum.de',
    'slam.org',
    'paris.fr',
    'zbiory.mnk.pl',
    'nga.gov',
    'metmuseum.org',
    'kansallisgalleria.fi',
    'art.thewalters.org',
    'artic.edu',
    'sammlung.belvedere.at',
    'google.com',
    'collections.britishart.yale.edu',
    'collections.tepapa.govt.nz',
    'collections.lacma.org',
    'commons.wikimedia.org',
    'museodelprado.es'
];

// Check if a URL can be iframed
function canBeIframed(url) {
    return !noIframeHosts.some(host => url.includes(host));
}

const publicDomainGroups = {
    'Paintings': [
        { name: 'Art Institute of Chicago', url: 'https://www.artic.edu/collection?q=SEARCH&artwork_type_id=Painting&is_public_domain=1' },
        { name: 'Barnes Foundation', url: 'https://collection.barnesfoundation.org/objects/?qtype=filter&qval={%22search%22:%22SEARCH%22,%22advancedFilters%22:{%22Artist%22:{},%22Copyright%22:{%22Public%20Domain%22:{%22filterType%22:%22Copyright%22,%22value%22:%22Public%20Domain%22,%22term%22:%22Public%20Domain%22,%22index%22:1,%22indexes%22:[4,7,8,10]}},%22Room%22:{},%22Classification%22:{},%22Year%22:{},%22Culture%22:{},%22Category%22:{%22Drawings%22:{%22filterType%22:%22Category%22,%22value%22:%22Drawings%22,%22term%22:%22Drawings%22,%22index%22:2},%22Prints%22:{%22filterType%22:%22Category%22,%22value%22:%22Prints%22,%22term%22:%22Prints%22,%22index%22:3},%22Paintings%22:{%22filterType%22:%22Category%22,%22value%22:%22Paintings%22,%22term%22:%22Paintings%22,%22index%22:4}}}}' },
        { name: 'Belvedere Museum', url: 'https://sammlung.belvedere.at/search/SEARCH?openContentProgramFilter=true&filter=name%3AGem%C3%A4lde%3Bopencontentprogram%3Atrue#filters' },
        { name: 'Clark Art Institute', url: 'https://www.clarkart.edu/museum/collections/browse-collections#/?text=SEARCH&collectionIds=100,94,97,93,101' },
        { name: 'Finnish National Gallery', url: 'https://www.kansallisgalleria.fi/en/search?categories[]=artwork&copyrightFree=true&searchTerms[]=SEARCH' },
        { name: 'Harvard Art Museums', url: 'https://harvardartmuseums.org/collections?q=SEARCH&worktype%5B%5D=127&load_amount=100&offset=0' },
        { name: 'KMSKA (Antwerp)', url: 'https://kmska.be/en/overview/the-collection?type=1448&type=1449&type=1445&type=1461&type=1446&type=1465&type=1858&search=SEARCH' },
        { name: 'Metropolitan Museum', url: 'https://www.metmuseum.org/art/collection/search?q=SEARCH&offset=0&searchField=Title&material=Paintings&showOnly=openAccess' },
        { name: 'National Gallery of Art', url: 'https://www.nga.gov/artwork-search?keywords=SEARCH&download=1&f[]=awtype:107231&f[]=awtype:105956' },
        { name: 'National Museum in Krakow', url: 'https://zbiory.mnk.pl/en/search-result?phrase=SEARCH&filter=JTdCJTIydHlwZXMlMjI6JTdCJTIybmFtZSUyMjolMjJ0eXBlcyUyMiwlMjJ2YWx1ZSUyMjolNUIlN0IlMjJpZCUyMjoxMTM5MTMsJTIybmFtZSUyMjolMjJwYWludGluZyUyMiU3RCU1RCwlMjJkZXNjJTIyOm51bGwsJTIyYWN0aXZlJTIyOnRydWUlN0QlN0Q%3D' },
        { name: 'National Museum in Warsaw', url: 'https://cyfrowe.mnw.art.pl/en/catalog?filter=JTdCJTIyc2VhcmNoVHlwZSUyMjolN0IlMjJuYW1lJTIyOiUyMnNlYXJjaFR5cGUlMjIsJTIydmFsdWUlMjI6JTIybmFtZSUyMiwlMjJkZXNjJTIyOiUyMmNhdGFsb2cucmFkaW8tc2VhcmNoLm9iamVjdC1uYW1lJTIyLCUyMmFjdGl2ZSUyMjp0cnVlJTdELCUyMnR5cGVzJTIyOiU3QiUyMm5hbWUlMjI6JTIydHlwZXMlMjIsJTIydmFsdWUlMjI6JTVCJTdCJTIyaWQlMjI6JTIyMTE3MDA4JTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIycGFpbnRpbmclMjAoMjQpJTIyLCUyMnRpdGxlJTIyOiUyMnBhaW50aW5nJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLWdtNzktcmVzdWx0LWxocDMtMTE3MDA4JTIyJTdEJTVELCUyMmRlc2MlMjI6JTVCJTdCJTIyaWQlMjI6JTIyMTE3MDA4JTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIycGFpbnRpbmclMjAoMjQpJTIyLCUyMnRpdGxlJTIyOiUyMnBhaW50aW5nJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLWdtNzktcmVzdWx0LWxocDMtMTE3MDA4JTIyJTdEJTVELCUyMmFjdGl2ZSUyMjp0cnVlJTdELCUyMmNvcHlyaWdodHMlMjI6JTdCJTIybmFtZSUyMjolMjJjb3B5cmlnaHRzJTIyLCUyMnZhbHVlJTIyOiU1QiU3QiUyMmlkJTIyOiUyMjUwMCUyMiwlMjJlbGVtZW50JTIyOiU3QiU3RCwlMjJkaXNhYmxlZCUyMjpmYWxzZSwlMjJzZWxlY3RlZCUyMjpmYWxzZSwlMjJ0ZXh0JTIyOiUyMlB1YmxpYyUyMGRvbWFpbiUyMiwlMjJ0aXRsZSUyMjolMjJQdWJsaWMlMjBkb21haW4lMjIsJTIyX3Jlc3VsdElkJTIyOiUyMnNlbGVjdDItNmk3Zi1yZXN1bHQtNnV1ay01MDAlMjIlN0QlNUQsJTIyZGVzYyUyMjolNUIlN0IlMjJpZCUyMjolMjI1MDAlMjIsJTIyZWxlbWVudCUyMjolN0IlN0QsJTIyZGlzYWJsZWQlMjI6ZmFsc2UsJTIyc2VsZWN0ZWQlMjI6ZmFsc2UsJTIydGV4dCUyMjolMjJQdWJsaWMlMjBkb21haW4lMjIsJTIydGl0bGUlMjI6JTIyUHVibGljJTIwZG9tYWluJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLTZpN2YtcmVzdWx0LTZ1dWstNTAwJTIyJTdEJTVELCUyMmFjdGl2ZSUyMjp0cnVlJTdEJTdE&phrase=SEARCH' },
        { name: 'National Museum of Norway', url: 'https://www.nasjonalmuseet.no/en/collection/search/?query=SEARCH&object-name=painting' },
        { name: 'Newfields Museum', url: 'https://collections.discovernewfields.org/search?showOnly=is_public_domain&object_types.keyword=paintings&searchTerm=SEARCH&section=artworks' },
        { name: 'NYPL - Paintings', url: 'https://digitalcollections.nypl.org/search/index?q=SEARCH&filters=%5Bgenre%3DPaintings%5D%5Brights%3DpublicDomain%5D' },
        { name: 'Rijksmuseum', url: 'https://www.rijksmuseum.nl/en/collection/search?query=SEARCH&collectionSearchContext=Art&page=1&sortingType=Popularity&facets[0].id=a8ea7a0fd82263755305737ecfad87b4&facets[0].nodeRelationType=HasObjectType' },
        { name: 'Saint Louis Art Museum', url: 'https://www.slam.org/collection/objects/?se=SEARCH&show_on_view=false&featured_objects=false&public_domain=true&recent_acquisitions=false&outdoors=false&object_classifications=paintings' },
        { name: 'Smithsonian', url: 'https://www.si.edu/search/images?edan_q=SEARCH&edan_fq[]=media_usage:CC0&edan_fq[]=object_type:%22Paintings%22' },
        { name: 'SMK (National Gallery of Denmark)', url: 'https://open.smk.dk/en/art/advanced/object_names?q=SEARCH&page=0&filters=public_domain%3Atrue%7Chas_image%3Atrue%7Cobject_names%3Apainting' },
        { name: 'Städel Museum', url: 'https://sammlung.staedelmuseum.de/en/search?q=SEARCH&f=+object:term(48)|object:term(2607)&flags=allScopes,downloadable' },
        { name: 'Web umenia', url: 'https://www.webumenia.sk/en/katalog?filter%5Bis_free%5D=true&filter%5Bhas_image%5D=true&q=SEARCH' },
        { name: 'Yale University Art Gallery', url: 'https://artgallery.yale.edu/collection?query=SEARCH&f%5B0%5D=classification%3APaintings&f%5B1%5D=open_access%3A1' }
    ],
    'Drawings': [
        { name: 'Harvard Art Museums', url: 'https://harvardartmuseums.org/collections?q=SEARCH&worktype%5B%5D=251&load_amount=100&offset=0' },
        { name: 'National Museum in Warsaw', url: 'https://cyfrowe.mnw.art.pl/en/catalog?filter=JTdCJTIyc2VhcmNoVHlwZSUyMjolN0IlMjJuYW1lJTIyOiUyMnNlYXJjaFR5cGUlMjIsJTIydmFsdWUlMjI6JTIybmFtZSUyMiwlMjJkZXNjJTIyOiUyMmNhdGFsb2cucmFkaW8tc2VhcmNoLm9iamVjdC1uYW1lJTIyLCUyMmFjdGl2ZSUyMjp0cnVlJTdELCUyMnR5cGVzJTIyOiU3QiUyMm5hbWUlMjI6JTIydHlwZXMlMjIsJTIydmFsdWUlMjI6JTVCJTdCJTIyaWQlMjI6JTIyMTE2NzI5JTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIyZHJhd2luZyUyMCg5KSUyMiwlMjJ0aXRsZSUyMjolMjJkcmF3aW5nJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLWdtNzktcmVzdWx0LTB5cXgtMTE2NzI5JTIyJTdEJTVELCUyMmRlc2MlMjI6JTVCJTdCJTIyaWQlMjI6JTIyMTE2NzI5JTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIyZHJhd2luZyUyMCg5KSUyMiwlMjJ0aXRsZSUyMjolMjJkcmF3aW5nJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLWdtNzktcmVzdWx0LTB5cXgtMTE2NzI5JTIyJTdEJTVELCUyMmFjdGl2ZSUyMjp0cnVlJTdELCUyMmNvcHlyaWdodHMlMjI6JTdCJTIybmFtZSUyMjolMjJjb3B5cmlnaHRzJTIyLCUyMnZhbHVlJTIyOiU1QiU3QiUyMmlkJTIyOiUyMjUwMCUyMiwlMjJlbGVtZW50JTIyOiU3QiU3RCwlMjJkaXNhYmxlZCUyMjpmYWxzZSwlMjJzZWxlY3RlZCUyMjpmYWxzZSwlMjJ0ZXh0JTIyOiUyMlB1YmxpYyUyMGRvbWFpbiUyMiwlMjJ0aXRsZSUyMjolMjJQdWJsaWMlMjBkb21haW4lMjIsJTIyX3Jlc3VsdElkJTIyOiUyMnNlbGVjdDItNmk3Zi1yZXN1bHQtNnV1ay01MDAlMjIlN0QlNUQsJTIyZGVzYyUyMjolNUIlN0IlMjJpZCUyMjolMjI1MDAlMjIsJTIyZWxlbWVudCUyMjolN0IlN0QsJTIyZGlzYWJsZWQlMjI6ZmFsc2UsJTIyc2VsZWN0ZWQlMjI6ZmFsc2UsJTIydGV4dCUyMjolMjJQdWJsaWMlMjBkb21haW4lMjIsJTIydGl0bGUlMjI6JTIyUHVibGljJTIwZG9tYWluJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLTZpN2YtcmVzdWx0LTZ1dWstNTAwJTIyJTdEJTVELCUyMmFjdGl2ZSUyMjp0cnVlJTdEJTdE&phrase=SEARCH' },
        { name: 'National Museum of Norway', url: 'https://www.nasjonalmuseet.no/en/collection/search/?query=SEARCH&object-name=drawing' },
        { name: 'Rijksmuseum', url: 'https://www.rijksmuseum.nl/en/collection/search?query=SEARCH&collectionSearchContext=Art&page=1&sortingType=Relevance&facets[0].id=a9f849002285adbd26678e361050083c&facets[0].nodeRelationType=HasObjectType' },
        { name: 'Smithsonian', url: 'https://www.si.edu/search/images?edan_q=SEARCH&edan_fq[]=media_usage:CC0&edan_fq[]=object_type:%22Drawings%22' },
        { name: 'SMK (National Gallery of Denmark)', url: 'https://open.smk.dk/en/art/advanced/object_names?q=SEARCH&page=0&filters=public_domain%3Atrue%7Chas_image%3Atrue%7Cobject_names%3Adrawing' }
    ],
    'Prints': [
        { name: 'Harvard Art Museums', url: 'https://harvardartmuseums.org/collections?q=SEARCH&worktype%5B%5D=289&load_amount=100&offset=0' },
        { name: 'National Museum in Krakow', url: 'https://zbiory.mnk.pl/en/search-result?phrase=SEARCH&filter=JTdCJTIydHlwZXMlMjI6JTdCJTIybmFtZSUyMjolMjJ0eXBlcyUyMiwlMjJ2YWx1ZSUyMjolNUIlN0IlMjJpZCUyMjoxMDA0MzMsJTIybmFtZSUyMjolMjJwcmludHMlMjAodmlzdWFsJTIwd29ya3MpJTIyJTdEJTVELCUyMmRlc2MlMjI6bnVsbCwlMjJhY3RpdmUlMjI6dHJ1ZSU3RCU3RA%3D%3D&limit=40' },
        { name: 'National Museum in Warsaw', url: 'https://cyfrowe.mnw.art.pl/en/catalog?filter=JTdCJTIyc2VhcmNoVHlwZSUyMjolN0IlMjJuYW1lJTIyOiUyMnNlYXJjaFR5cGUlMjIsJTIydmFsdWUlMjI6JTIybmFtZSUyMiwlMjJkZXNjJTIyOiUyMmNhdGFsb2cucmFkaW8tc2VhcmNoLm9iamVjdC1uYW1lJTIyLCUyMmFjdGl2ZSUyMjp0cnVlJTdELCUyMnR5cGVzJTIyOiU3QiUyMm5hbWUlMjI6JTIydHlwZXMlMjIsJTIydmFsdWUlMjI6JTVCJTdCJTIyaWQlMjI6JTIyMTE2MDYxJTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIycHJpbnQlMjAoMSklMjIsJTIydGl0bGUlMjI6JTIycHJpbnQlMjIsJTIyX3Jlc3VsdElkJTIyOiUyMnNlbGVjdDItZ203OS1yZXN1bHQtdzJ2Mi0xMTYwNjElMjIlN0QlNUQsJTIyZGVzYyUyMjolNUIlN0IlMjJpZCUyMjolMjIxMTYwNjElMjIsJTIyZWxlbWVudCUyMjolN0IlN0QsJTIyZGlzYWJsZWQlMjI6ZmFsc2UsJTIyc2VsZWN0ZWQlMjI6ZmFsc2UsJTIydGV4dCUyMjolMjJwcmludCUyMCgxKSUyMiwlMjJ0aXRsZSUyMjolMjJwcmludCUyMiwlMjJfcmVzdWx0SWQlMjI6JTIyc2VsZWN0Mi1nbTc5LXJlc3VsdC13MnYyLTExNjA2MSUyMiU3RCU1RCwlMjJhY3RpdmUlMjI6dHJ1ZSU3RCwlMjJjb3B5cmlnaHRzJTIyOiU3QiUyMm5hbWUlMjI6JTIyY29weXJpZ2h0cyUyMiwlMjJ2YWx1ZSUyMjolNUIlN0IlMjJpZCUyMjolMjI1MDAlMjIsJTIyZWxlbWVudCUyMjolN0IlN0QsJTIyZGlzYWJsZWQlMjI6ZmFsc2UsJTIyc2VsZWN0ZWQlMjI6ZmFsc2UsJTIydGV4dCUyMjolMjJQdWJsaWMlMjBkb21haW4lMjIsJTIydGl0bGUlMjI6JTIyUHVibGljJTIwZG9tYWluJTIyLCUyMl9yZXN1bHRJZCUyMjolMjJzZWxlY3QyLTZpN2YtcmVzdWx0LTZ1dWstNTAwJTIyJTdEJTVELCUyMmRlc2MlMjI6JTVCJTdCJTIyaWQlMjI6JTIyNTAwJTIyLCUyMmVsZW1lbnQlMjI6JTdCJTdELCUyMmRpc2FibGVkJTIyOmZhbHNlLCUyMnNlbGVjdGVkJTIyOmZhbHNlLCUyMnRleHQlMjI6JTIyUHVibGljJTIwZG9tYWluJTIyLCUyMnRpdGxlJTIyOiUyMlB1YmxpYyUyMGRvbWFpbiUyMiwlMjJfcmVzdWx0SWQlMjI6JTIyc2VsZWN0Mi02aTdmLXJlc3VsdC02dXVrLTUwMCUyMiU3RCU1RCwlMjJhY3RpdmUlMjI6dHJ1ZSU3RCU3RA%3D%3D&phrase=SEARCH' },
        { name: 'National Museum of Norway', url: 'https://www.nasjonalmuseet.no/en/collection/search/?query=SEARCH&object-name=print' },
        { name: 'Rijksmuseum', url: 'https://www.rijksmuseum.nl/en/collection/search?query=SEARCH&collectionSearchContext=Art&page=1&sortingType=Popularity&facets[0].id=3159edbfc6b22de59dfb2522fecc2706&facets[0].nodeRelationType=HasObjectType' },
        { name: 'SMK (National Gallery of Denmark)', url: 'https://open.smk.dk/en/art/advanced/object_names?q=SEARCH&page=0&filters=public_domain%3Atrue%7Chas_image%3Atrue%7Cobject_names%3Aprint' }
    ],
    'Illustrations & Graphic Arts': [
        { name: 'National Museum in Krakow', url: 'https://zbiory.mnk.pl/en/search-result?phrase=SEARCH&filter=JTdCJTIydHlwZXMlMjI6JTdCJTIybmFtZSUyMjolMjJ0eXBlcyUyMiwlMjJ2YWx1ZSUyMjolNUIlN0IlMjJpZCUyMjo5OTk5NywlMjJuYW1lJTIyOiUyMmlsbHVzdHJhdGlvbnMlMjAobGF5b3V0JTIwZmVhdHVyZXMpJTIyJTdEJTVELCUyMmRlc2MlMjI6bnVsbCwlMjJhY3RpdmUlMjI6dHJ1ZSU3RCU3RA%3D%3D&limit=40' },
        { name: 'NYPL - Illustrations', url: 'https://digitalcollections.nypl.org/search/index?q=SEARCH&filters=%5Brights%3DpublicDomain%5D%5Bgenre%3DIllustrations%5D' },
        { name: 'Smithsonian', url: 'https://www.si.edu/search/images?edan_q=SEARCH&edan_fq[]=media_usage:CC0&edan_fq[]=object_type%3A%22Graphic+arts%22' }
    ],
    'Mixed Collections': [
        { name: 'Cleveland Museum of Art', url: 'https://www.clevelandart.org/art/collection/search?search=SEARCH&limit_by=&cc0=1' },
        { name: 'Europeana - 3D', url: 'https://www.europeana.eu/en/search?page=1&qf=TYPE%3A%223D%22&query=SEARCH%20&reusability=open&view=grid' },
        { name: 'Europeana - Images', url: 'https://www.europeana.eu/en/search?page=1&qf=TYPE%3A%22IMAGE%22&query=SEARCH%20&reusability=open&view=grid' },
        { name: 'Gallerix.org (Google Images)', url: 'https://www.google.com/search?q=intitle%3ASEARCH+site%3Ahttps%3A%2F%2Fgallerix.org&tbm=isch' },
        { name: 'Getty Museum', url: 'https://search.getty.edu/gateway/search?q=SEARCH&cat=type&f=%22Drawings%22&types=%22Paintings%22&highlights=%22Open%20Content%20Images%22&rows=50&srt=&dir=s&dsp=0&img=1&pg=1' },
        { name: 'Rijksmuseum - All Art', url: 'https://www.rijksmuseum.nl/en/collection/search?query=SEARCH&collectionSearchContext=Art&page=1&sortingType=Popularity' },
        { name: 'Te Papa Museum', url: 'https://collections.tepapa.govt.nz/search/SEARCH/results?wi=false&wdi=true&q=SEARCH&page=1&t=null&ir=Unrestricted&c=RareBooks' },
        { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/w/index.php?search=SEARCH&title=Special%3AMediaSearch&type=image&fileres=%3E1000&haslicense=unrestricted' }
    ]
};

const restrictedUseGroups = {
    'Paintings': [
        { name: 'Art Institute of Chicago', url: 'https://www.artic.edu/collection?q=SEARCH&artwork_type_id=Painting' },
        { name: 'Belvedere Museum', url: 'https://sammlung.belvedere.at/search/SEARCH?filter=name%3AGem%C3%A4lde' },
        { name: 'Finnish National Gallery', url: 'https://www.kansallisgalleria.fi/en/search?categories[]=artwork&searchTerms[]=SEARCH' },
        { name: 'Metropolitan Museum', url: 'https://www.metmuseum.org/art/collection/search?q=SEARCH&offset=0&searchField=Title&material=Paintings' },
        { name: 'Museo del Prado', url: 'https://www.museodelprado.es/en/the-collection/art-works?searchObras=SEARCH' },
        { name: 'National Gallery of Art', url: 'https://www.nga.gov/artwork-search?keywords=SEARCH&f[]=awtype:107231&f[]=awtype:105956' },
        { name: 'Paris Museums', url: 'https://www.parismuseescollections.paris.fr/fr/denomination/peinture?keywords=SEARCH&limit=300&sort=score' },
        { name: 'Saint Louis Art Museum', url: 'https://www.slam.org/collection/objects/?se=SEARCH&show_on_view=false&featured_objects=false&recent_acquisitions=false&outdoors=false&object_classifications=paintings' },
        { name: 'Städel Museum', url: 'https://sammlung.staedelmuseum.de/en/search?q=SEARCH&f=+object:term(48)|object:term(2607)' },
        { name: 'Web umenia', url: 'https://www.webumenia.sk/en/katalog?filter%5Bhas_image%5D=true&q=SEARCH' },
        { name: 'Yale University Art Gallery', url: 'https://artgallery.yale.edu/collection?query=SEARCH&f%5B0%5D=classification%3APaintings&f%5B1%5D=image_availability%3A1' }
    ],
    'Drawings': [
        { name: 'Museo del Prado', url: 'https://www.museodelprado.es/en/the-collection/art-works?searchObras=SEARCH&ecidoc:p108i_E12_p32_used_general_technique@@@pm:techniqueNode=http://museodelprado.es/items/technique_81' }
    ],
    'Prints': [
        { name: 'Museo del Prado', url: 'https://www.museodelprado.es/en/the-collection/art-works?searchObras=SEARCH&ordenarPor=gnoss:relevancia&orden=asc&ecidoc:p108i_E12_p32_used_general_technique@@@pm:techniqueNode=http://museodelprado.es/items/technique_316' }
    ],
    'Illustrations & Graphic Arts': [
        { name: 'Paris Museums', url: 'https://www.parismuseescollections.paris.fr/fr/recherche/denominations/arts%20graphiques-166293?keywords=SEARCH&limit=300&sort=score' }
    ],
    'Mixed Collections': [
        { name: 'Europeana - 3D', url: 'https://www.europeana.eu/en/search?page=1&qf=TYPE%3A%223D%22&query=SEARCH%20&view=grid' },
        { name: 'Europeana - Images', url: 'https://www.europeana.eu/en/search?page=1&qf=TYPE%3A%22IMAGE%22&query=SEARCH%20&view=grid' },
        { name: 'Getty Museum', url: 'https://search.getty.edu/gateway/search?q=SEARCH&cat=type&f=%22Drawings%22&types=%22Paintings%22&rows=50&srt=&dir=s&dsp=0&img=1&pg=1' },
        { name: 'LACMA', url: 'https://collections.lacma.org/search/site/SEARCH?f%5B0%5D=bm_field_has_image%3Atrue' },
        { name: 'Walters Art Museum', url: 'https://art.thewalters.org/search/?q=SEARCH&q-scope=everything' },
        { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/w/index.php?search=SEARCH&title=Special%3AMediaSearch&type=image&fileres=%3E1000' },
        { name: 'Yale British Art Center', url: 'https://collections.britishart.yale.edu/?search_field=simple_search&doc-types=objects&q=SEARCH' }
    ]
};

const STORAGE_KEY = 'museumSearchTerm';
const PUBLIC_SELECTED_KEY = 'publicSelectedURLs';
const RESTRICTED_SELECTED_KEY = 'restrictedSelectedURLs';
const DISPLAY_MODE_KEY = 'museumDisplayMode';
const ACTIVE_TAB_KEY = 'activeTab';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const statusDiv = document.getElementById('status');
const publicCheckboxContainer = document.getElementById('museumCheckboxes');
const restrictedCheckboxContainer = document.getElementById('restrictedCheckboxes');
const tabCountSpan = document.getElementById('tabCount');

// Icon mapping for categories
const categoryIcons = {
    'Paintings': '🖼️',
    'Drawings': '✏️',
    'Prints': '🖨️',
    'Illustrations & Graphic Arts': '🎨',
    'Mixed Collections': '🏛️'
};

// Flatten museums for easier indexing
let allPublicMuseums = [];
Object.keys(publicDomainGroups).forEach(category => {
    publicDomainGroups[category].forEach(museum => {
        allPublicMuseums.push({ ...museum, category, type: 'public' });
    });
});

let allRestrictedMuseums = [];
Object.keys(restrictedUseGroups).forEach(category => {
    restrictedUseGroups[category].forEach(museum => {
        allRestrictedMuseums.push({ ...museum, category, type: 'restricted' });
    });
});

// Tab switching - only when clicking the text, not the checkbox
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Only switch tabs if NOT clicking on the checkbox
        if (e.target.type === 'checkbox' || e.target.classList.contains('tab-checkbox')) {
            return;
        }
        
        const tab = btn.dataset.tab;
        
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`${tab}-content`).classList.add('active');
        
        // Save active tab
        localStorage.setItem(ACTIVE_TAB_KEY, tab);
        
        // Update count
        updateTabCount();
    });
});

// Tab checkboxes to select/deselect all in that tab
const publicCheckbox = document.getElementById('publicDomainTabCheckbox');
const restrictedCheckbox = document.getElementById('restrictedTabCheckbox');

publicCheckbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    allPublicMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-public-${index}`);
        if (checkbox) checkbox.checked = checked;
    });
    Object.keys(publicDomainGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-public-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = checked;
            categoryCheckbox.indeterminate = false;
        }
    });
    updateTabCount();
});

restrictedCheckbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    allRestrictedMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-restricted-${index}`);
        if (checkbox) checkbox.checked = checked;
    });
    Object.keys(restrictedUseGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-restricted-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = checked;
            categoryCheckbox.indeterminate = false;
        }
    });
    updateTabCount();
});

// Generate checkboxes grouped by category
function generateCheckboxes(groups, container, allMuseums, storageKey, type) {
    Object.keys(groups).forEach(category => {
        // Create category header with checkbox
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        
        const categoryCheckbox = document.createElement('input');
        categoryCheckbox.type = 'checkbox';
        categoryCheckbox.className = 'category-checkbox';
        categoryCheckbox.id = `category-${type}-${category}`;
        categoryCheckbox.checked = true;
        categoryCheckbox.addEventListener('change', (e) => toggleCategory(category, e.target.checked, type));
        
        const categoryTitle = document.createElement('span');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = `${categoryIcons[category]} ${category}`;
        
        categoryHeader.appendChild(categoryCheckbox);
        categoryHeader.appendChild(categoryTitle);
        container.appendChild(categoryHeader);

        // Create museums in this category
        groups[category].forEach(museum => {
            const globalIndex = allMuseums.findIndex(
                m => m.name === museum.name && m.url === museum.url
            );

            const div = document.createElement('div');
            div.className = 'museum-checkbox-item';
            div.dataset.category = category;
            div.dataset.type = type;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `museum-${type}-${globalIndex}`;
            checkbox.checked = true;
            checkbox.addEventListener('change', () => {
                updateTabCount();
                updateCategoryCheckbox(category, type);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `museum-${type}-${globalIndex}`;
            label.textContent = museum.name;
            
            // Add indicator if it can't be iframed
            if (!canBeIframed(museum.url)) {
                const indicator = document.createElement('span');
                indicator.style.color = '#999';
                indicator.style.fontSize = '0.85em';
                indicator.textContent = ' ↗';
                indicator.title = 'Opens in new tab only';
                label.appendChild(indicator);
            }
            
            div.appendChild(checkbox);
            div.appendChild(label);
            container.appendChild(div);
        });
    });
    
    // Load saved selections
    loadSelectedMuseums(allMuseums, storageKey, type);
    updateTabCount();
}

// Toggle all museums in a category
function toggleCategory(category, checked, type) {
    const items = document.querySelectorAll(`.museum-checkbox-item[data-category="${category}"][data-type="${type}"]`);
    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = checked;
        }
    });
    updateTabCount();
}

// Update category checkbox based on individual museum checkboxes
function updateCategoryCheckbox(category, type) {
    const items = document.querySelectorAll(`.museum-checkbox-item[data-category="${category}"][data-type="${type}"] input[type="checkbox"]`);
    const categoryCheckbox = document.getElementById(`category-${type}-${category}`);
    
    if (categoryCheckbox) {
        const allChecked = Array.from(items).every(cb => cb.checked);
        const noneChecked = Array.from(items).every(cb => !cb.checked);
        
        categoryCheckbox.checked = allChecked;
        categoryCheckbox.indeterminate = !allChecked && !noneChecked;
    }
}

// Update tab count display
function updateTabCount() {
    const publicCount = getSelectedMuseums('public').length;
    const restrictedCount = getSelectedMuseums('restricted').length;
    const totalCount = publicCount + restrictedCount;
    
    tabCountSpan.textContent = `${totalCount} source${totalCount !== 1 ? 's' : ''} selected (${publicCount} PD, ${restrictedCount} restricted)`;
    
    // Update public domain tab checkbox state
    const publicCheckbox = document.getElementById('publicDomainTabCheckbox');
    if (publicCount === 0) {
        publicCheckbox.checked = false;
        publicCheckbox.indeterminate = false;
    } else if (publicCount === allPublicMuseums.length) {
        publicCheckbox.checked = true;
        publicCheckbox.indeterminate = false;
    } else {
        publicCheckbox.checked = false;
        publicCheckbox.indeterminate = true;
    }
    
    // Update restricted tab checkbox state
    const restrictedCheckbox = document.getElementById('restrictedTabCheckbox');
    if (restrictedCount === 0) {
        restrictedCheckbox.checked = false;
        restrictedCheckbox.indeterminate = false;
    } else if (restrictedCount === allRestrictedMuseums.length) {
        restrictedCheckbox.checked = true;
        restrictedCheckbox.indeterminate = false;
    } else {
        restrictedCheckbox.checked = false;
        restrictedCheckbox.indeterminate = true;
    }
    
    // Save selections
    saveSelectedMuseums(allPublicMuseums, PUBLIC_SELECTED_KEY, 'public');
    saveSelectedMuseums(allRestrictedMuseums, RESTRICTED_SELECTED_KEY, 'restricted');
}

// Get selected museums
function getSelectedMuseums(type) {
    const selected = [];
    const museums = type === 'public' ? allPublicMuseums : allRestrictedMuseums;
    museums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-${type}-${index}`);
        if (checkbox && checkbox.checked) {
            selected.push(museum);
        }
    });
    return selected;
}

// Save selected museums to localStorage
function saveSelectedMuseums(allMuseums, storageKey, type) {
    const selectedIndices = [];
    allMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-${type}-${index}`);
        if (checkbox && checkbox.checked) {
            selectedIndices.push(index);
        }
    });
    localStorage.setItem(storageKey, JSON.stringify(selectedIndices));
}

// Load selected museums from localStorage
function loadSelectedMuseums(allMuseums, storageKey, type) {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        try {
            const selectedIndices = JSON.parse(saved);
            allMuseums.forEach((museum, index) => {
                const checkbox = document.getElementById(`museum-${type}-${index}`);
                if (checkbox) {
                    checkbox.checked = selectedIndices.includes(index);
                }
            });
        } catch (e) {
            console.error('Error loading selections:', e);
        }
    }
}

// Load last search term from localStorage
function loadLastSearchTerm() {
    const lastSearch = localStorage.getItem(STORAGE_KEY);
    if (lastSearch) {
        searchInput.value = lastSearch;
    }
}

// Save search term to localStorage
function saveSearchTerm(term) {
    localStorage.setItem(STORAGE_KEY, term);
}

// Load display mode preference
function loadDisplayMode() {
    const savedMode = localStorage.getItem(DISPLAY_MODE_KEY);
    if (savedMode) {
        const radioButton = document.querySelector(`input[name="displayMode"][value="${savedMode}"]`);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
}

// Save display mode preference
function saveDisplayMode(mode) {
    localStorage.setItem(DISPLAY_MODE_KEY, mode);
}

// Load active tab
function loadActiveTab() {
    const activeTab = localStorage.getItem(ACTIVE_TAB_KEY);
    if (activeTab) {
        const tabBtn = document.querySelector(`[data-tab="${activeTab}"]`);
        if (tabBtn) {
            tabBtn.click();
        }
    }
}

function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    setTimeout(() => {
        statusDiv.className = 'status';
    }, 5000);
}

function searchMuseums() {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        showStatus('Please enter a search term', 'warning');
        searchInput.focus();
        return;
    }

    const publicMuseums = getSelectedMuseums('public');
    const restrictedMuseums = getSelectedMuseums('restricted');
    const selectedMuseums = [...publicMuseums, ...restrictedMuseums];
    
    if (selectedMuseums.length === 0) {
        showStatus('Please select at least one source', 'warning');
        return;
    }

    // Save the search term to localStorage
    saveSearchTerm(searchTerm);

    // Check display mode
    const displayMode = document.querySelector('input[name="displayMode"]:checked').value;

    if (displayMode === 'single') {
        showInSinglePage(selectedMuseums, searchTerm);
    } else {
        openInTabs(selectedMuseums, searchTerm);
    }
}

function showInSinglePage(selectedMuseums, searchTerm) {
    // Separate iframe-compatible and non-iframe sites
    const iframeMuseums = selectedMuseums.filter(m => canBeIframed(m.url));
    const tabMuseums = selectedMuseums.filter(m => !canBeIframed(m.url));

    // Open non-iframe sites in tabs first
    if (tabMuseums.length > 0) {
        setTimeout(() => {
            tabMuseums.forEach((museum, index) => {
                setTimeout(() => {
                    const searchUrl = museum.url.replace(/SEARCH/g, encodeURIComponent(searchTerm));
                    window.open(searchUrl, '_blank');
                }, index * 100);
            });
        }, 500);
    }

    // Show iframe-compatible museums in the single page view
    if (iframeMuseums.length > 0) {
        const container = document.createElement('div');
        container.className = 'iframe-container';
        container.id = 'iframeContainer';

        const header = document.createElement('div');
        header.className = 'iframe-header';
        header.id = 'iframeHeader';
        let headerText = `🎨 Museum Search Results: "${searchTerm}" (${iframeMuseums.length} shown below`;
        if (tabMuseums.length > 0) {
            headerText += `, ${tabMuseums.length} opened in tabs`;
        }
        headerText += ')';
        
        header.innerHTML = `
            <h2>${headerText}</h2>
            <button class="close-iframes" onclick="closeIframes()">✕ Close</button>
        `;
        container.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'iframe-grid';

        iframeMuseums.forEach(museum => {
            const searchUrl = museum.url.replace(/SEARCH/g, encodeURIComponent(searchTerm));
            
            const item = document.createElement('div');
            item.className = 'iframe-item';
            
            item.innerHTML = `
                <div class="iframe-item-header">
                    <span>${museum.name} - ${museum.category}</span>
                    <a href="${searchUrl}" target="_blank">Open in new tab ↗</a>
                </div>
                <iframe src="${searchUrl}" loading="lazy"></iframe>
            `;
            
            grid.appendChild(item);
        });

        container.appendChild(grid);
        document.body.appendChild(container);

        container.addEventListener('scroll', () => {
            const scrollTop = container.scrollTop;
            const header = document.getElementById('iframeHeader');
            
            if (scrollTop > 50) {
                header.classList.add('collapsed');
            } else if (scrollTop === 0) {
                header.classList.remove('collapsed');
            }
        });
    }

    let statusMsg = '';
    if (iframeMuseums.length > 0 && tabMuseums.length > 0) {
        statusMsg = `Loaded ${iframeMuseums.length} source${iframeMuseums.length !== 1 ? 's' : ''} in one page and opened ${tabMuseums.length} in separate tabs!`;
    } else if (iframeMuseums.length > 0) {
        statusMsg = `Loaded ${iframeMuseums.length} source${iframeMuseums.length !== 1 ? 's' : ''} in one page!`;
    } else {
        statusMsg = `Opened ${tabMuseums.length} source${tabMuseums.length !== 1 ? 's' : ''} in new tabs (none support iframe embedding)`;
    }
    showStatus(statusMsg, 'success');
}

function closeIframes() {
    const container = document.getElementById('iframeContainer');
    if (container) {
        container.remove();
    }
}

function openInTabs(selectedMuseums, searchTerm) {
    searchButton.disabled = true;
    searchButton.textContent = 'Opening...';

    let opened = 0;
    let failed = 0;
    
    const refocusInterval = setInterval(() => {
        window.focus();
    }, 10);
    
    selectedMuseums.forEach((museum, index) => {
        setTimeout(() => {
            const searchUrl = museum.url.replace(/SEARCH/g, encodeURIComponent(searchTerm));
            const newWindow = window.open(searchUrl, '_blank');
            
            if (newWindow) {
                opened++;
                window.focus();
            } else {
                failed++;
            }

            if (index === selectedMuseums.length - 1) {
                setTimeout(() => clearInterval(refocusInterval), 500);
                
                searchButton.disabled = false;
                searchButton.textContent = 'Search Selected';
                
                if (failed > 0) {
                    showStatus(`Opened ${opened} tabs. ${failed} blocked - please allow pop-ups and try again.`, 'warning');
                } else {
                    showStatus(`Successfully opened ${opened} source tabs!`, 'success');
                }
            }
        }, index * 100);
    });
}

searchButton.addEventListener('click', searchMuseums);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMuseums();
    }
});

// Save display mode when radio buttons change
document.querySelectorAll('input[name="displayMode"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        saveDisplayMode(e.target.value);
    });
});

// Global Select All/None buttons
document.getElementById('globalSelectAllBtn').addEventListener('click', () => {
    // Check both tab checkboxes
    document.getElementById('publicDomainTabCheckbox').checked = true;
    document.getElementById('restrictedTabCheckbox').checked = true;
    
    // Select all public domain
    allPublicMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-public-${index}`);
        if (checkbox) checkbox.checked = true;
    });
    Object.keys(publicDomainGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-public-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            categoryCheckbox.indeterminate = false;
        }
    });
    
    // Select all restricted
    allRestrictedMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-restricted-${index}`);
        if (checkbox) checkbox.checked = true;
    });
    Object.keys(restrictedUseGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-restricted-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            categoryCheckbox.indeterminate = false;
        }
    });
    
    updateTabCount();
});

document.getElementById('globalSelectNoneBtn').addEventListener('click', () => {
    // Uncheck both tab checkboxes
    document.getElementById('publicDomainTabCheckbox').checked = false;
    document.getElementById('restrictedTabCheckbox').checked = false;
    
    // Deselect all public domain
    allPublicMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-public-${index}`);
        if (checkbox) checkbox.checked = false;
    });
    Object.keys(publicDomainGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-public-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = false;
            categoryCheckbox.indeterminate = false;
        }
    });
    
    // Deselect all restricted
    allRestrictedMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-restricted-${index}`);
        if (checkbox) checkbox.checked = false;
    });
    Object.keys(restrictedUseGroups).forEach(category => {
        const categoryCheckbox = document.getElementById(`category-restricted-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = false;
            categoryCheckbox.indeterminate = false;
        }
    });
    
    updateTabCount();
});

// Single-page view only button (Public Domain tab)
document.getElementById('selectIframeBtn').addEventListener('click', () => {
    allPublicMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-public-${index}`);
        if (checkbox) {
            checkbox.checked = canBeIframed(museum.url);
        }
    });
    Object.keys(publicDomainGroups).forEach(category => {
        updateCategoryCheckbox(category, 'public');
    });
    updateTabCount();
});

// Single-page view only button (Restricted tab)
document.getElementById('selectIframeRestrictedBtn').addEventListener('click', () => {
    allRestrictedMuseums.forEach((museum, index) => {
        const checkbox = document.getElementById(`museum-restricted-${index}`);
        if (checkbox) {
            checkbox.checked = canBeIframed(museum.url);
        }
    });
    Object.keys(restrictedUseGroups).forEach(category => {
        updateCategoryCheckbox(category, 'restricted');
    });
    updateTabCount();
});

// Initialize
generateCheckboxes(publicDomainGroups, publicCheckboxContainer, allPublicMuseums, PUBLIC_SELECTED_KEY, 'public');
generateCheckboxes(restrictedUseGroups, restrictedCheckboxContainer, allRestrictedMuseums, RESTRICTED_SELECTED_KEY, 'restricted');
loadLastSearchTerm();
loadDisplayMode();
loadActiveTab();
searchInput.focus();
searchInput.select();
    </script>
</body>
</html>
