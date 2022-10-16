interface PodCast {
  image: Image;
  name: string;
  categories: Category[];
  experts: Expert[];
}

interface Image {
  uri: string;
}

interface Category {
  name: string;
}

interface Expert {
  company: string;
  firstName: string;
  lastName: string;
  title: string;
}

export default PodCast;
