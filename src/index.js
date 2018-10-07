module.exports = function longestConsecutiveLength(array) {

  let sequence = new Set();
  let length = 0;
  let i;
  let sequence_value;

  for (i = 0; i < array.length; i++) sequence.add(array[i]);

  for (i = 0; i < array.length; i++) {
    if (!sequence.has(array[i] - 1)) {
      sequence_value = array[i];
      while (sequence.has(sequence_value)) sequence_value++;

      if (length < (sequence_value - array[i])) length = sequence_value - array[i];
    }
  }
  return length;
}
