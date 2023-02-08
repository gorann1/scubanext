import Card from '@/components/card';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Contact = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h2 className="text-2xl font-bold">Contact Page</h2>
    <form action="/send-data-here" method="post">
      <label for="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label for="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>
    <Card />
  </Main>
);

export default Contact;
