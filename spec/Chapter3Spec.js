describe ("Minimum", function () {
  it ("should return 3", function () {
    expect (min (3, 6)).toBe (3);
  });
  it ("should return 15", function () {
    expect (min (32, 15)).toBe (15);
  });
  it ("should return 2000", function () {
    expect (min (2000, 5345)).toBe (2000);
  });
  it ("should return -1", function () {
    expect (min (8, -1)).toBe (-1);
  });
  it ("should return 0", function () {
    expect (min (0, 6)).toBe (0);
  });
});

describe ("Recursion", function () {
  it ("should return true with n = 50", function () {
    expect (isEven (50)).toBeTruthy ()
  });
  it ("should return false  with n = 3", function() {
    expect (isEven (3)).toBeFalsy ()
  });
  it ("should return true  with n = 0", function() {
    expect (isEven (0)).toBeTruthy ()
  });
  it ("should return false  with n = 75", function () {
    expect (isEven (75)).toBeFalsy ()
  });
  it ("should return false with n = 1", function () {
    expect (isEven (1)).toBeFalsy ()
  });
});

describe ("Recursion with negative n", function () {
    it ("should return true with n = -6", function () {
        expect (isEvenNeg(-6)).toBeTruthy()
    });
    it ("should return false with n = -15", function () {
        expect(isEvenNeg(-15)).toBeFalsy();
    });
});

describe ("Bean Counting countBs", function () {
    it ("should return 2 with string 'BBC'", function () {
        expect (countBs("BBC")).toBe(2);
    });

    it ("should return 6 with string 'IREBBBBBBSW'", function () {
        expect (countBs("IREBBBBBBSW")).toBe(6);
    });
    it ("should return 1 with string 'gdejBzqerf'", function () {
        expect (countBs("gdejBzqerf")).toBe(1);
    })
    it ("should return 3 with string 'BidyBdjesBjd'", function() {
      expect (countBs("BidyBdjesBjd")).toBe(3);
    });
});

describe ("Bean Counting countChar", function () {
  it ("should return 4 with string 'kakkerlak' and char 'k'", function () {
    expect (countChar("kakkerlak", "k")).toBe(4);
  });
  it ("should return 5 with 'kdhchhesxhweh' and char 'h'", function () {
    expect (countChar("kdhchhesxhweh", "h")).toBe(5);
  });
  it ("should return 1 with 'idAegd' and char 'a'", function () {
    expect (countChar("idAegd", "A")).toBe(1);
  });
  it ("should return 2 with 'nvfredf' and char 'f'", function () {
    expect (countChar("nvfredf", "f")).toBe(2);
  });
});
