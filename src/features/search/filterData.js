const filterData = (query, data) => {
  if (query.trim() === '') {
    return data;
  } else {
    const results = data.filter((i) =>
      i.content
        .replace(/\s/g, '')
        .toLowerCase()
        .includes(query.replace(/\s/g, '').toLowerCase())
    );
    return results;
  }
};

export default filterData;
