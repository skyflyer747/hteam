#include <iostream>
#include <vector> 
#include <string>
#include <cstring>

char cheatsheet[] = {
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'z', 'x', 'c', 'v', 'b', 'n', 'm' 
};
char reprUppercase = '+';
char reprLowercase = '-';
char reprSeparator = 'o';

class QKAS {
    private:
        /*
         * Gets the index of a char inside the cheat sheet.
         */
        static int getIndexOf(char toFind) {
            /*
             * Technically cheatsheet is a C-style string.
             * Mostly because it's a char[].
             */
            for (unsigned int i=0; i < strlen(cheatsheet); ++i) {
                if (cheatsheet[i] == tolower(toFind)) {
                    return i;
                }
            }
            return -1;
        }

        /*
         * This function executes the process described above.
         */
        static std::string getRepr(char base) {
            char toUse = islower(base) ? reprLowercase : reprUppercase;
            int amount = getIndexOf(base);
            std::string repr = "";
            /*
             * Basically means 'if char is a-z'.
             * Simpler doing this than astd::string conversion.
             */
            if (amount > -1) {
                for (int i=0; i <= amount; ++i) {
                    repr += toUse;
                }
            }
            else {
                repr += base;
            }
            return repr;
        }


    public:
/*
 * 'Encodes' a fullstd::string.
 * Basically runns the process described above over and over.
 * Ain't it fun?
 */
static std::string encode(std::string toEncode) {
    char current;
    std::string encoded = "";
    for (unsigned int cl=0; cl < toEncode.length(); ++cl) {
        current = toEncode.at(cl);
        encoded += getRepr(current);
        if (cl < toEncode.length()-1) {
            encoded += reprSeparator;
        }
    }
    return encoded;
}

static std::vector<std::vector<char> > makeVector(std::string toTokenize) {
    char current;
    std::vector<std::vector<char> > tokens;
    unsigned int tokenIndex = 0;
    std::string decoded;
    for (unsigned int i=0; i < toTokenize.length(); ++i) {
        current = toTokenize.at(i);
        if (current == reprSeparator) {
            /*
             * Token Index is used to signify what token we're on.
             * It is incremented on every reprSeparator.
             */
            ++tokenIndex;   
        }
        else {
            if (tokens.size() < tokenIndex+1) {
                tokens.push_back(std::vector<char>());
            }
            tokens[tokenIndex].push_back(current);
        }
    }
    return tokens;
}

static std::string decode(std::string toDecode) {
    std::vector<std::vector<char> > vectorized = makeVector(toDecode);
    char current;
    std::string decoded = "";
    for (unsigned int i=0; i < vectorized.size(); ++i) {
        for (unsigned int j=0; j < vectorized[i].size(); ++j) {
            current = vectorized[i][j];
            if (current != reprUppercase && current != reprLowercase) {
                decoded += current;
            }
            else if (j == vectorized[i].size()-1) {
                if (current == reprUppercase) {
                    decoded += toupper(cheatsheet[j]);
                }
                else {
                    decoded += tolower(cheatsheet[j]);
                }
            }
        }
    }
    return decoded;
}

};
