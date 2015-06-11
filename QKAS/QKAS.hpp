#ifndef QKAS_HEADER
#define QKAS_HEADER

#include <string>
#include <vector>

class QKASClass {
private:
    std::string cheatsheet;

    char reprUppercase;
    char reprLowercase;
    char reprSeparator;

public:
    // constructor
    QKASClass();

    // Gets the index of a char inside the cheatsheet
    int getIndexOf(char toFind);

    // executes the process described above
    std::string getRepr(char base);

    // 'Encodes' a full string.
    //  Basically runns the process described above over and over.
    // Ain't it fun?
    std::string encode(std::string toEncode);
    std::string decode(std::string toDecode);

    std::vector<std::vector<char>> makeVector(std::string toTokenize);
};

#endif
