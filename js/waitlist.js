function joinWaitlist(list, email) {
  const updatedList = list.slice();
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');

  if (atIndex <= 0 || normalizedEmail.indexOf('.', atIndex + 1) === -1) {
    return updatedList;
  }

  if (!updatedList.includes(normalizedEmail)) {
    updatedList.push(normalizedEmail);
  }

  return updatedList;
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}