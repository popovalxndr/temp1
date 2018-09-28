import random

X = 'X'
O = '0'
EMPTY = '_'
CELLS_COUNT = 9

def instr():
    print(1,2,3)
    print(4,5,6)
    print(7,8,9)

def create_board(board,free_cells):
    for i in range(CELLS_COUNT):
        board.append(EMPTY)
        free_cells.append(i + 1)
    return board, free_cells

def draw_board(board):
    print(board[0],board[1],board[2])
    print(board[3],board[4],board[5])
    print(board[6],board[7],board[8])

def choice_symbol():
    answer = ''
    while answer.lower() not in ('y','n'):
        answer = input('do you want first turn (y\\n)?\n')
    if answer.lower() == 'y':
        return X,O
    else:
        return O,X

def hum_turn(board, free_cells, symbol):
    cell = None
    while cell not in free_cells:
        cell = int(input("type cell number\n"))
    board[cell - 1] = symbol
    free_cells.remove(cell)

def comp_turn(board, free_cells, symbol):
    cell = random.choice(free_cells)
    board[cell - 1] = symbol
    free_cells.remove(cell)    
    
def check_for_win(board,free_cells,hum_symbol):
    WIN_COMBINATIONS = (
        (0,1,2),
        (3,4,5),
        (6,7,8),
        (0,3,6),
        (1,4,7),
        (2,5,8),
        (0,4,8),
        (2,4,6))

    for combo in WIN_COMBINATIONS:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != EMPTY:
            if board[combo[0]] == hum_symbol:
                print('Human wins!')
            else:
                print('Computer wins!')
            return True

    if len(free_cells) == 0:
        print('Draw');
        return True

    return False
    
def get_next_symbol(symbol):
    if symbol == X:
        return O
    else:
        return X


def main():
    board = []
    free_cells = []
    board, free_cells = create_board(board, free_cells)
    instr()

    next_symbol = X

    hum_symbol, comp_symbol = choice_symbol()

    while not check_for_win(board,free_cells,hum_symbol):
        if (next_symbol == hum_symbol):
            hum_turn(board,free_cells,hum_symbol)
        else:
            comp_turn(board,free_cells,comp_symbol)
        draw_board(board)
        print('\n')
        next_symbol = get_next_symbol(next_symbol)


main()

        

