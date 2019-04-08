var equations = {
// 1-49 add remove sticks

// 1: {"first":8, "sec":0, "op":"+" , "res":9 , "mode":"remove" , "sol":["img1"]},
    2: {"first": 3, "sec": 1, "op": "+", "res": 2, "mode": ["remove"], "sol": ["img4"]},
    3: {"first": 0, "sec": 1, "op": "+", "res": 9, "mode": ["add"], "sol": ["img16"]},
    4: {"first": 5, "sec": 8, "op": "+", "res": 8, "mode": "remove", "sol": ["img5", "img6"]},
    5: {"first": 1, "sec": 1, "op": "-", "res": 3, "mode": "add", "sol": ["img0", "img16"]},
    6: {"first": 8, "sec": 9, "op": "-", "res": 4, "mode": "remove", "sol": ["img21", "img22"]},
    7: {"first": 8, "sec": 7, "op": "+", "res": 8, "mode": "remove", "sol": ["img21", "img10"]},
    8: {"first": 6, "sec": 4, "op": "-", "res": 7, "mode": "remove", "sol": ["img1", "img26"]},
    9: {"first": 8, "sec": 7, "op": "+", "res": 2, "mode": "remove", "sol": ["img1", "img4"]},


// 50-99 move 1 stick
    1: {"first": 3, "sec": 7, "op": "-", "res": 4, "mode": "move", "sol": ["img4", "img21"]},
    51: {"first": 5, "sec": 5, "op": "+", "res": 8, "mode": "move", "sol": ["img5", "img7"]},
    52: {"first": 0, "sec": 3, "op": "+", "res": 9, "mode": "move", "sol": ["img16", "img2"]},
    53: {"first": 3, "sec": 0, "op": "+", "res": 2, "mode": "move", "sol": ["img3", "img1"]},
    54: {"first": 8, "sec": 6, "op": "-", "res": 6, "mode": "move", "sol": ["img16", "img4"]},
    55: {"first": 1, "sec": 0, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img17"]},
    56: {"first": 2, "sec": 9, "op": "+", "res": 8, "mode": "move", "sol": ["img7", "img6"]},
    57: {"first": 1, "sec": 0, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img17"]},
    58: {"first": 1, "sec": 0, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img17"]},
    59: {"first": 1, "sec": 0, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img17"]},
    60: {"first": 1, "sec": 0, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img17"]},
    61: {"first": 8, "sec": 0, "op": "-", "res": 6, "mode": "move", "sol": ["img2", "img4"]}, // 6 + 0 = 6
    62: {"first": 6, "sec": 1, "op": "-", "res": 6, "mode": "move", "sol": ["img1", "img4"]}, // 5 + 1 = 6
    63: {"first": 9, "sec": 1, "op": "+", "res": 8, "mode": "move", "sol": ["img10", "img1"]}, // 8 + 1 = 9
    64: {"first": 7, "sec": 8, "op": "-", "res": 7, "mode": "move", "sol": ["img20", "img4"]}, // 7 + 0 = 7
    21: {"first": 1, "sec": 5, "op": "+", "res": 4, "mode": "move", "sol": ["img5", "img7"]}, //1 + 3 = 4


// 100-149 move 2 sticks

    100: {"first": 6, "sec": 9, "op": "+", "res": 5, "mode": "move", "sol": ["img1", "img5", "img11", "img10"]},
    101: {"first": 2, "sec": 9, "op": "-", "res": 3, "mode": "move", "sol": ["img5", "img2", "img0", "img3"]}, // 6 - 3 = 3
    102: {"first": 2, "sec": 2, "op": "+", "res": 7, "mode": "move", "sol": ["img4", "img0", "img3", "img1"]}, // 9 - 2 = 7
    103: {"first": 4, "sec": 0, "op": "+", "res": 8, "mode": "move", "sol": ["img4", "img10", "img17", "img18"]}, // 9 - 0 = 9


};

