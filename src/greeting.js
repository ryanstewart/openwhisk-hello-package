function main(args) {
    if(args.challenge)
    {
        return {
          statusCode: 200,
          body: args.challenge
        };
    } else {
      return {args.__ow_method};
    }
}
