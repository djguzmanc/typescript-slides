// Let's know some enums examples
// to use frequently
enum PrintMedia {
  Newspaper = 'NEWSPAPER',
  Newsletter = 'NEWSLETTER',
  Magazine = 'MAGAZINE',
  Book = 'BOOK'
}

function getPrintMediaCode(mediaName: string): string {
  if (mediaName === PrintMedia.Book ) {
      return `You are selected a ${PrintMedia.Book}`
  }
  return PrintMedia.Newspaper;
}
