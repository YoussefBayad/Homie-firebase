const filterData = (query, data) => {
  if (query.trim() === '') {
    return data;
  } else {
    const results = data.filter((i) => {
      return i.content
        ? i.content
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(query.replace(/\s/g, '').toLowerCase())
        : i.displayName
            .replace(/\s/g, '')
            .toLowerCase()
            .includes(query.replace(/\s/g, '').toLowerCase());
    });
    return results;
  }
};

export default filterData;
