// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.

import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: { data: T } = await axios.get(url);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
