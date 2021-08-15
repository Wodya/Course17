
class Message
{
  constructor(Author, Text) {
    this.Author = Author;
    this.Text = Text;
    this.Date = new Date();
  }
}
export default Message;