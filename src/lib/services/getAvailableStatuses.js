export let availableStatusesForRole = {
    // 1: To do,
    // 8: Estimate,
    // 2: In Progress,
    // 12: Code Review,
    // 4: QA,
    // 3: Resolved,
    // 5: Closed,
    // 6: Rejected,
    // 15: Not fixed bug
    Manager: {
        1: [1, 8, 2, 5, 6],
        8: [1, 8, 2, 5, 6],
        2: [1, 8, 2, 12, 4, 3, 6],
        12: [1, 2, 12, 4, 3, 6],
        4: [1, 2, 4, 3, 6, 15],
        3: [1, 3, 5,],
        5: [1, 3, 5, 6,],
        6: [1, 12, 4, 3, 5, 6,],
        15: [2, 15,],
    },
    Developer: {
        1: [1, 8, 2, 5, 6],
        8: [8, 2, 5, 6],
        2: [2, 12, 4, 3, 5, 6],
        12: [2, 12, 4, 3, 6],
        4: [2, 4, 3, 5, 15],
        3: [2, 3, 5,],
        5: [3, 5, 6,],
        6: [1, 6,],
        15: [2, 15,],
    },
    QA: {
        1: [1, 8, 2, 12, 4, 3, 5,],
        8: [8, 2, 12],
        2: [1, 2, 12, 4, 3, 5,],
        12: [2, 12, 4, 3,],
        4: [1, 8, 2, 12, 4, 3,],
        3: [2, 12, 4, 3,],
        5: [3, 5, 15,],
        6: [6,],
        15: [2, 12, 4, 15,],
    },
    Reporter: {
        1: [1, 8, 2, 5, 6],
        8: [1, 8, 2, 5, 6],
        2: [1, 8, 2, 12, 4, 3, 6],
        12: [1, 2, 12, 4, 3, 6],
        4: [1, 2, 4, 3, 6, 15],
        3: [1, 3, 5,],
        5: [1, 3, 5, 6,],
        6: [1, 12, 4, 3, 5, 6,],
        15: [2, 15,],
    },
    'Non member': {
        1: [1, 8, 2, 5, 6],
        8: [1, 8, 2, 5, 6],
        2: [1, 8, 2, 12, 4, 3, 6],
        12: [1, 2, 12, 4, 3, 6],
        4: [1, 2, 4, 3, 6, 15],
        3: [1, 3, 5,],
        5: [1, 3, 5, 6,],
        6: [1, 12, 4, 3, 5, 6,],
        15: [2, 15,],
    },
    'Customer': {
        1: [1],
        8: [8],
        2: [2],
        12: [12],
        4: [4, 15],
        3: [3],
        5: [5],
        6: [6],
        15: [2, 15,],
    },

}
